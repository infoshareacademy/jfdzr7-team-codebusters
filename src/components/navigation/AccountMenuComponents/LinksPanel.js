import { Link } from "react-router-dom"
export const LinksPanel = ({ className, linksList }) => {
    return (
        <div className={className}>
            {linksList.map((link, index) =>
                <Link key={index} to={link.url}>{link.text}</Link>)}
        </div>
    )
}