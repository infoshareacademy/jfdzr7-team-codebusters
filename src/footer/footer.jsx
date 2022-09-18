import React from 'react';
import { StyledFooter, FooterRows, FooterColumns, Subject, SubSubject, FooterLine, SubjectCopyright } from './Footer.styled.js'
import { categoriesOfBooks } from '../utils/categoriesOfBooks'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


const footerInformation = [
    {
        id: 1,
        Group: 'Terms/policy',
        subGroups: [
            {
                Id: 1,
                subject: 'Policy',
                link: 'policy'
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
                link: 'classics'
            },
            {
                Id: 2,
                subject: 'Crime',
                link: 'crime'

            },
            {
                Id: 3,
                subject: 'Programming',
                link: 'programming'
            }
        ]
    },
    {
        id: 3,
        Group: 'Contact',
        subGroups: [
            {
                Id: 1,
                subject: 'someone@example.com',
                link: 'mailto:someone@example.com'
            },
            {
                Id: 2,
                subject: '+123 456 776',
                link: 'tel:12345678'
            }
        ]
    },
    {
        id: 4,
        Group: 'Social media',
        subGroups: [
            {
                Id: 1,
                subject: 'Fb',
                link: 'https://www.facebook.com/groups/332561337957584'
            },
            {
                Id: 2,
                subject: 'Instagram',
                link: 'https://www.instagram.com/kasia2/'

            }
        ]
    }
]


export function FootEr() {
    const backGroundColor = '#FFCE87';

    return (
        <StyledFooter bg={backGroundColor}>
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
        </StyledFooter >
    )
}