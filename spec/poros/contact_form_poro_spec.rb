require 'rails_helper'

RSpec.describe ContactForm do
    it 'is a contact form' do
     contact_form = { contact_name: "Jim Jordan",
         contact_email: "jim@jordan.org",
         contact_message: "Hello World"} 

     our_contact = ContactForm.new(contact_form)

     expect(our_contact).to be_a(ContactForm)
     expect(our_contact.name).to eq(contact_form[:contact_name])
     expect(our_contact.email).to eq(contact_form[:contact_email])
     expect(our_contact.message).to eq(contact_form[:contact_message])
    end
end