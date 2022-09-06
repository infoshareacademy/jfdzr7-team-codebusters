// import '../index.css'
export function FootEr(props) {
    const footerInformation = [
        {
            id: 1,
            subject: 'Regulamin',
            link: '/',
            group1: '',
            group2: '',
            group3: ''
        },
        {
            id: 2,
            subject: 'Books',
            group1: 'Classics',
            group2: 'Crime',
            group3: 'Fantasy'
        },
        {
            id: 3,
            subject: 'Contact',
            group1: 'email',
            group2: 'telephone',
            group3: ''
        },
        {
            id: 4,
            subject: 'Social media',
            group1: 'fb',
            group2: 'instagram',
            group3: ''
        }
    ]
    return (
        <footer >
            <div className="footer-rows">
                {footerInformation.map((item) => {
                    return (
                        <p className="footer-columns">
                            <div key={item.id} className="footer-main">{item.subject}</div>
                            <p className="submain">{item.group1}</p>
                            <p className="submain">{item.group2}</p>
                            <p className="submain">{item.group3}</p>
                        </p>
                    )
                }
                )}</div>
            <div className="footer-line"></div>
            <div className="footer-main">Copyright</div>
        </footer>
    )
} 
