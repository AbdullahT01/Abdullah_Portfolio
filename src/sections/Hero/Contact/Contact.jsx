import styles from './ContactStyles.module.css';


function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'> Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name='name' id='name' placeholder='Name'  />
            </div>

            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name='Email' id='Email' placeholder='Email'  />
            </div>

            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    message
                </label>
                <textarea  name='message' id='message' placeholder='Message'  ></textarea>
            </div>

            <input className='hover btn' type="submit" value= "Submit" />
        </form>
    </section>
  )
}

export default Contact
