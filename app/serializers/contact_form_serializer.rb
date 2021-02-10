class ContactFormSerializer
    include JSONAPI::Serializer
    attributes :id, :name, :email, :message 
end