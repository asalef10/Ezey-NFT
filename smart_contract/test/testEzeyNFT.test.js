const ezeyNFT = artifacts.require("ezeyNFT");
const ezeyNftFactory = artifacts.require("ezeyNftFactory");

contract("Factory", (accounts) => {
  let EzeyNFTInstance;
  let FactoryNFTInstance;
  before(async () => {
    //  EzeyNFTInstance = await ezeyNFT.;
    FactoryNFTInstance = await ezeyNftFactory.deployed();
    await FactoryNFTInstance.createNFT("DragonBallZ", "DBZ");
  });

  it("Should mint NFT", async () => {
    let contractAddress = await FactoryNFTInstance.getNftAddress(accounts[0]);
    EzeyNFTInstance = await ezeyNFT.at(contractAddress);
    let mintNFT = await EzeyNFTInstance.mintNFT("www.img.com", "DBZ Img");
    // let addressUser = await FactoryNFTInstance.returnAddress();
  });
  it("Should return address user", async () => {
    let addressUser = await FactoryNFTInstance.returnAddress();
    assert.equal(addressUser, accounts[0], "Wallet user not the same");
    console.log(addressUser);
  });
  it("Should get number walletID '7002'", async () => {
    let walletID = await FactoryNFTInstance.getWalletID(accounts[0]);
    assert.equal(
      walletID,
      7002,
      "Wallet ID number Not the same id for first mint"
    );
  });
  it("Should get contract by search symbol", async () => {
    let contractAddress = await FactoryNFTInstance.getContractAddressBySymbol(
      "DBZ",
      accounts[0]
    );
    console.log(contractAddress);
  });
  it("Should get list nft by user", async () => {
    let listNFT = await FactoryNFTInstance.showListNFT(accounts[0]);
    // console.log(listNFT);
  });
});
