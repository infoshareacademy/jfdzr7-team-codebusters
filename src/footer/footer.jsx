import React from 'react';
import { Footer, FooterRows, FooterColumns, Subject, SubSubject, FooterLine, SubjectCopyright } from './Footer.styled.jsx'

const footerInformation = [
    {
        id: 1,
        Group: 'Policy',
        subGroups: [
            {
                Id: 1,
                subject: 'Policy',
                link: './Regulamin'
            }
        ]
    },
    {
        id: 2,
        Group: 'Books',
        subGroups: [
            {
                Id: 1,
                subject: 'Classics',
                link: './classics'
            },
            {
                Id: 2,
                subject: 'Crime',
                link: './Crime'

            },
            {
                Id: 3,
                subject: 'Fantasy',
                link: './Fantasy'

            }

        ]
    },
    {
        id: 3,
        Group: 'Contact',
        subGroups: [
            {
                Id: 1,
                subject: 'email',
                link: 'mailto:someone@example.com'
            },
            {
                Id: 2,
                subject: 'telephone',
                link: '12345678'

            }
        ]
    },
    {
        id: 4,
        Group: 'Social media',
        subGroups: [
            {
                Id: 1,
                subject: 'fb',
                link: 'https://www.facebook.com/groups/332561337957584'
            },
            {
                Id: 2,
                subject: 'instagram',
                link: 'https://www.instagram.com/kasia2/'

            }
        ]
    }
]

export function FootEr() {
    return (
        <Footer>
            <FooterRows>
                {footerInformation.map((item) => {
                    return (
                        <FooterColumns key={item.id}>
                            <Subject >{item.Group}</Subject>
                            {item.subGroups.map((element) => {
                                return (
                                    <SubSubject key={item.id + element.Id} href={element.link}>{element.subject}</SubSubject>
                                )
                            })
                            }
                        </FooterColumns>
                    )
                })}
            </FooterRows>
            <FooterLine />
            <FooterRows>
                <SubjectCopyright>Copyright by CODEBUSTERS</SubjectCopyright>
            </FooterRows>
        </Footer >
    )
}