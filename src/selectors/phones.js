// Get visible phones
const getVisiblePhones = (phones, { text, sortBy }) => {
  return phones
    .filter(phone => {
      const nameMatch = phone.name.toLowerCase().includes(text.toLowerCase());
      const brandMatch = phone.brand.toLowerCase().includes(text.toLowerCase());
      const displayMatch = phone.display
        .toLowerCase()
        .includes(text.toLowerCase());

      return nameMatch || brandMatch || displayMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price < b.price ? 1 : -1;
        case "release":
          return a.release < b.release ? 1 : -1;
        case "brand":
          return a.brand < b.brand ? 1 : -1;
      }
    });
};

export default getVisiblePhones;
