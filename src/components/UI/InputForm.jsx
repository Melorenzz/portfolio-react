export default function InputForm({maxLength, placeholder, setUserMessage, id, onChange}) {
    return(
        <input data-aos="fade-up"
               maxLength={maxLength}
               onChange={onChange}
               id={id}
               required
               placeholder={placeholder}
               type="text"
        />
    )
}