import { BaseFormField } from "@/components/BaseComponents/BaseForm";

export const contactDetailsConst = [
    {
        title: "Phone:",
        value: "(372) 587-2335"
    },
    {
        title: "Email:",
        value: "info@demoemail.com"
    },
    {
        title: "Address:",
        value: "P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620",
    }
]

export const contactConst = {
    title: "Contact us",
    homeLable: "Home",
    submittedText: "Your details are saved. We will contact you soon!",
    getInTouch: "Get in touch"
}


export const getContactFormFields = (
    formData: {
        name: string;
        email: string;
        phone: string;
        message: string;
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
): BaseFormField[] => [
        { label: "Name", name: "name", type: "text", value: formData.name, onChange: handleChange, placeholder: "Name:" },
        { label: "Email", name: "email", type: "email", value: formData.email, onChange: handleChange, placeholder: "Email:" },
        { label: "Phone number", name: "phone", type: "text", value: formData.phone, onChange: handleChange, placeholder: "Phone number:" },
        { label: "Message", name: "message", type: "textarea", value: formData.message, onChange: handleChange, placeholder: "Message:" },
    ];
