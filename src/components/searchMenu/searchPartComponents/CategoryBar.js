import { StyledCategoryBar } from "./searchPartComponents.styled"
import { CategoryRadioButton } from "./CategoryRadioButton"

export const CategoryBar = ({ options, context }) => {
    return (
        <StyledCategoryBar>
            {options.map(option =>
                <CategoryRadioButton
                    key={option}
                    option={option}
                    context={context}
                />)}
        </StyledCategoryBar>
    )
}