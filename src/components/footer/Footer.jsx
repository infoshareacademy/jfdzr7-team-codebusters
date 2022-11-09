import React from 'react';

import { StyledFooter, FooterRows, FooterColumns, Subject, SubSubject, FooterLine, SubjectCopyright } from './Footer.styled.js'
import { footerInformation } from './footerInformations'

export function Footer() {
    return (
        <StyledFooter>
            <FooterRows>
                {footerInformation.map((item) => {
                    return (
                        <FooterColumns key={item.id}>
                            <Subject >{item.Group}</Subject>

                            {item.Group === 'Books' ? item.subGroups.map((element) => {
                                return (
                                    <SubSubject key={item.id + element.Id} to={{
                                        pathname: '/books',
                                    }} state={element.link}>{element.subject}</SubSubject>
                                )
                            }) :
                                item.subGroups.map((element) => {
                                    return (
                                        <SubSubject as='a' key={item.id + element.Id} href={element.link}>{element.subject}</SubSubject>
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