export default function InputForm({maxLength, placeholder, setUserMessage, id, onChange, name, type='text'}) {
    return(
        <input data-aos="fade-up"
               name={name}
               maxLength={maxLength}
               onChange={onChange}
               id={id}
               required
               placeholder={placeholder}
               type={type}
        />
    )
}