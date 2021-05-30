function getPriceRange(count) {
    return '$'.repeat(count)
}

function prepareDescription(description) {
    return description.replace(/(<([^>]+)>)/ig, '').slice(0, 150).trim() + '...';
}

module.exports = {
    getPriceRange,
    prepareDescription
}