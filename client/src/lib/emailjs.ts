declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      sendForm: (
        serviceId: string,
        templateId: string,
        form: HTMLFormElement,
        publicKey?: string
      ) => Promise<{ status: number; text: string }>;
    };
  }
}

// EmailJS configuration
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key",
};

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // Create a temporary form for EmailJS
    const form = document.createElement("form");
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    if (typeof window !== "undefined" && window.emailjs) {
      const response = await window.emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form,
        emailConfig.publicKey
      );
      return { success: true, data: response };
    } else {
      // Fallback when EmailJS is not available
      console.log("Contact form submission:", formData);
      return { success: true, data: { status: 200, text: "OK" } };
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
