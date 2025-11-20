'use client'
import { useState } from 'react'
import BaseHeader from '@/components/BaseComponents/BaseHeader';
import BaseButton from '@/components/BaseComponents/BaseButton';
import BaseForm from '@/components/BaseComponents/BaseForm';
import { contactConst, contactDetailsConst, getContactFormFields } from '@/constants/contactConstants';

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target?.name]: e.target?.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const fields = getContactFormFields?.(formData, handleChange);

  return (
    <div className="min-h-screen">
      <BaseHeader
        title={contactConst?.title}
        currentLabel={contactConst?.title}
        homeLabel={contactConst?.homeLable}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-medium mb-10 font-jost">
              {contactConst?.getInTouch}
            </h2>
            {contactDetailsConst?.map?.((item, index) => (
              <div className="mb-8" key={index}>
                <p className="font-semibold text-xl mb-1">{item?.title}</p>
                <p className="text-gray-700">{item?.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100/90 p-10 rounded-lg">
            {submitted ? (
              <p className="text-green-600 font-medium mt-4 text-center">
                {contactConst?.submittedText}
              </p>
            ) : (
              <BaseForm fields={fields} onSubmit={handleSubmit}>
                <div className="text-center mt-4">
                  <BaseButton type="submit" className="cursor-pointer border">
                    Send Now
                  </BaseButton>
                </div>
              </BaseForm>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
