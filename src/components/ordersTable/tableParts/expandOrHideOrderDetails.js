export const expandOrHideOrderDetails = (event) => {
    const detailPanel = event.currentTarget.lastChild
    const detailPanelIsHidden = detailPanel.style.display === 'none'
    detailPanel.style.display = detailPanelIsHidden ? 'block' : 'none'
}