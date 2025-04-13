export const fetchItems = async () => {
    try {
      const response = await fetch('/dataset.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching dataset');
    }
  };
  