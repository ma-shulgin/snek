export enum Event { 
  createClass = 'nft.ClassCreated',
  createInstance = 'nft.InstanceMinted',
  transfer = 'nft.InstanceTransferred',
  burn = 'nft.InstanceBurned',
  destroy = 'nft.ClassDestroyed',
  priceUpdate = 'marketplace.TokenPriceUpdated',
  sold = 'marketplace.TokenSold',
  placeOffer = 'marketplace.OfferPlaced',
  withdrawOffer = 'marketplace.OfferWithdrawn',
  acceptOffer = 'marketplace.OfferAccepted',
  payRoyalty = 'marketplace.RoyaltyPaid',
  addRoyalty = 'marketplace.RoyaltyAdded',
}

export enum Extrinsic {
  createClass = 'nft.createClass',
  mint = 'nft.mint',
  transfer = 'nft.transfer',
  burn = 'nft.burn',
  destroyClass = 'nft.destroyClass',
  acceptOffer = 'marketplace.acceptOffer',
  addRoyalty = 'marketplace.addRoyalty',
  buy = 'marketplace.buy',
  makeOffer = 'marketplace.makeOffer',
  setPrice = 'marketplace.setPrice',
  withdrawOffer = 'marketplace.withdrawOffer',
}