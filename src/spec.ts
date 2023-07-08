import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "hedera:[-a-zA-Z0-9]{5,32}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "hedera",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{5,32}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: `hedera:[-a-zA-Z0-9]{5,32}:[0-9]{1,19}\\.[0-9]{1,19}\\.[0-9]{1,19}(\\-[a-z]{5}){0,1}$`,
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "hedera",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{5,32}",
      },
      2: {
        name: "address",
        regex: `[0-9]{1,19}\\.[0-9]{1,19}\\.[0-9]{1,19}(\\-[a-z]{5}){0,1}$`,
      },
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetName: IdentifierSpec = {
  name: "assetName",
  regex: `(?:nft|token):[0-9]{1,19}\\.[0-9]{1,19}\\.[0-9]{1,19}(\\-[a-z]{5}){0,1}$`,
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "(?:nft|token)",
      },
      1: {
        name: "reference",
        regex: `[0-9]{1,19}\\.[0-9]{1,19}\\.[0-9]{1,19}(\\-[a-z]{5}){0,1}$`,
      },
    },
  },
};

const CAIP19AssetType: IdentifierSpec = {
  name: "assetType",
  regex: `hedera:[-a-zA-Z0-9]{5,32}\\/(?:nft|token):[0-9]{1,19}\\.[0-9]{1,19}\\.[0-9]{1,19}(\\-[a-z]{5}){0,1}$`,
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

const CAIP19AssetId: IdentifierSpec = {
  name: "assetId",
  regex: `hedera:[-a-zA-Z0-9]{5,32}\\/nft:[0-9]{1,19}\\.[0-9]{1,19}\\.[0-9]{1,19}(\\-[a-z]{5}){0,1}\\/[0-9]{1,19}$`,
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
      2: {
        name: "tokenId",
        regex: "[0-9]{1,19}$",
      },
    },
  },
};

export const CAIP = {
  "2": CAIP2,
  "10": CAIP10,
  "19": {
    assetName: AssetName,
    assetType: CAIP19AssetType,
    assetId: CAIP19AssetId,
  },
};
