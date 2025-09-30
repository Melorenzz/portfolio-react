export default function TextareaForm({
                                         placeholder,
                                         maxLength,
                                         onChange,
                                         id,
                                         required,
                                         value,
                                         ...props
                                     }) {
    return (
        <textarea
            data-aos="fade-up"
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            id={id}
            required={required}
            value={value}
            {...props}
        />
    );
}
