const UseEzeyFunctionsAPI = () => {
    const insertToCollectionTable = async (
      NFTSymbol,
      NFTUrl,
      IDAddressWallet,
      addressWallet
    ) => {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "content-length": "355",
            "content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            NFTSymbol: NFTSymbol,
            NFTUrl: `${NFTUrl}`,
            IDAddressWallet: IDAddressWallet,
            addressWallet: addressWallet,
          }),
        };
        const res = await fetch(
          "http://localhost:8080/insertToCollectionTable",
          requestOptions
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    const getAllData = async () => {
      try {
        const res = await fetch("http://localhost:8080/getAllData");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    const getDataById = async (id) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "content-length": "355",
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          IDAddressWallet: id,
        }),
      };
      try {
        const res = await fetch(
          "http://localhost:8080/getDataById",
          requestOptions
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    return {
      insertToCollectionTable,
      getAllData,
      getDataById,
    };
  };
  export default UseEzeyFunctionsAPI;
  