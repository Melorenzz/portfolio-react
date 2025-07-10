export default function ButtonForm({children, disabled}){
    return(
        <button disabled={disabled} data-aos="fade-up" type='submit' className={'submit'}>{disabled ? 'wait 30 seconds' : children}</button>
    )
}