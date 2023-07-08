# caip-hedera 

CAIP standard utils

## ChainId (CAIP-2)

### Object-oriented

```typescript
import { ChainId } from "caip-hedera";

const chainId = new ChainId("hedera:mainnet");

// OR

const chainId = new ChainId({ namespace: "hedera", reference: "mainnet" });

// THEN

chainId.toString();
// "hedera:mainnet"

chainId.toJSON();
// { namespace: "hedera", reference: "mainnet" }
```

### Functional

```typescript
import { ChainId } from "caip-hedera";

ChainId.parse("hedera:mainnet");
// { namespace: "hedera", reference: "mainnet" }

// AND

ChainId.format({ namespace: "hedera", reference: "mainnet" });
// "hedera:mainnet"
```

## AccountId (CAIP-10)

### Object-oriented

```typescript
import { AccountId } from "caip-hedera";

const accountId = new AccountId(
  "hedera:mainnet:0.0.121"
);

// OR

const accountId = new AccountId({
  chainId: { namespace: "hedera", reference: "mainnet" },
  address: "0.0.121",
});

// ALSO

const accountId = new AccountId({
  chainId: "hedera:mainnet",
  address: "0.0.121",
});

// THEN

accountId.toString();
// "hedera:mainnet:0.0.121"

accountId.toJSON();
// { address: "0.0.121", chainId: { namespace: "hedera", reference: "mainnet" } }
```

### Functional

```typescript
import { AccountId } from "caip-hedera";

AccountId.parse("hedera:mainnet:0.0.121");
// { address: "0.0.121", chainId: { namespace: "hedera", reference: "mainnet" } }

// AND

AccountId.format({
  chainId: { namespace: "hedera", reference: "mainnet" },
  address: "0.0.121",
});
//"hedera:mainnet:0.0.121"

// OR

AccountId.format({
  chainId: "hedera:mainnet",
  address: "0.0.121",
});
//"hedera:mainnet:0.0.121"
```

## AssetId (CAIP-19)

### Object-oriented

```typescript
import { AssetId } from "caip-hedera";

const assetId = new AssetId(
  "hedera:mainnet/nft:0.0.55492/1"
);

// OR

const assetId = new AssetId({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
  tokenId: "1",
});

// ALSO

const assetId = new AssetId({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
  tokenId: "1",
});

// THEN

assetId.toString();
// "hedera:mainnet/nft:0.0.55492/1"

assetId.toJSON();
// {
//   chainId: { namespace: "hedera", reference: "mainnet" },
//   assetName: { namespace: "nft", reference: "0.0.55492" },
//   tokenId: "1",
// }
```

### Functional

```typescript
import { AssetId } from "caip-hedera";

AssetId.parse("hedera:mainnet/nft:0.0.55492/1");
// {
//   chainId: { namespace: "hedera", reference: "mainnet" },
//   assetName: { namespace: "nft", reference: "0.0.55492" },
//   tokenId: "1",
// }

// AND

AssetId.format({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
  tokenId: "1",
});
// "hedera:mainnet/nft:0.0.55492/1"

// OR

AssetId.format({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
  tokenId: "1",
});
// "hedera:mainnet/nft:0.0.55492/1"
```

## AssetType (CAIP-19)

### Object-oriented

```typescript
import { AssetType } from "caip-hedera";

const assetType = new AssetType(
  "hedera:mainnet/nft:0.0.55492"
);

// OR

const assetType = new AssetType({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
});

// ALSO

const assetType = new AssetType({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
});

// THEN

assetType.toString();
// "hedera:mainnet/nft:0.0.55492"

assetType.toJSON();
// {
//   chainId: { namespace: "hedera", reference: "mainnet" },
//   assetName: { namespace: "nft", reference: "0.0.55492" },
// }
```

### Functional

```typescript
import { AssetType } from "caip-hedera";

AssetType.parse("hedera:mainnet/nft:0.0.55492");
// {
//   chainId: { namespace: "hedera", reference: "mainnet" },
//   assetName: { namespace: "nft", reference: "0.0.55492" },
// }

// AND

AssetType.format({
  chainId: { namespace: "hedera", reference: "mainnet" },
  assetName: {
    namespace: "nft",
    reference: "0.0.55492",
  },
});
// "hedera:mainnet/nft:0.0.55492"

// OR

AssetType.format({
  chainId: "hedera:mainnet",
  assetName: "nft:0.0.55492",
});
// "hedera:mainnet/nft:0.0.55492"
```
