import React from 'react';
import { StyledFooter, FooterRows, FooterColumns, Subject, SubSubject, FooterLine, SubjectCopyright } from './Footer.styled.js'
import { footerInformation } from '../../utils/footerInformations'

export function Footer() {
    return (
        <StyledFooter>
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