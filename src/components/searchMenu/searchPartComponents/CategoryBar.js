import { StyledCategoryRadioButton } from './StyledCategoryRadioButton'

export const CategoryBar = ({ className, options, context }) => {
    return (
        <div className={className}>
            {options.map(option =>
                <StyledCategoryRadioButton
                    key={option}
                    option={option}
                    context={context}
                />)}
        </div>
    )
}