export const EXTRA_CHAIN_DATA_FILE = 'extra-chain-data.json';
export const NEW_CHAIN_DATA_FILE = 'new-chain-data.json';
export const CHAIN_LIST_FILE = 'public/chain-list.ts';
export const TOKEN_LIST_FILE = 'public/token-list.ts';
export const RATES_IDS_LIST_FILE = 'public/rates-ids-list.ts';
export const ASSET_PLATFORM_ID_LIST_FILE = 'public/asset-platforms-ids-list.ts';
export const INDEX_FILE = 'public/index.ts';

export const AUTO_GENERATED_FILE_LABEL =
  '// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.';

export const CHAINS_DATASOURCE_URL = 'https://chainid.network/chains.json';
export const ASSETS_LIST_PATH = 'node_modules/assets/blockchains';
export const ASSETS_RESOURCES_URL =
  'https://github.com/ExzoNetwork/assets-wallet/tree/master/blockchains';
export const OPTIMISM_TOKEN_LIST_URL =
  'https://raw.githubusercontent.com/ethereum-optimism/ethereum-optimism.github.io/master/optimism.tokenlist.json';
export const ARBITRUM_TOKEN_LIST_URL =
  'https://bridge.arbitrum.io/token-list-42161.json';
export const COINGECKO_COINS_LIST_URL =
  'https://api.coingecko.com/api/v3/coins/list';
export const COINGECKO_ASSET_PLATFORMS_URL =
  'https://api.coingecko.com/api/v3/asset_platforms';

export const ASSETS_BLOCKCHAINS_CHAIN_ID: { [key in number]: string } = {
  592: 'astar',
  1229: 'exzonetwork',
  2370: 'exzotestnet',
  336: 'astar',
  42161: 'arbitrum',
  200: 'arbitrum',
  421611: 'arbitrum',
  1313161554: 'aurora',
  1313161555: 'aurora',
  1313161556: 'aurora',
  43114: 'avalanchec',
  43113: 'avalanchec',
  32520: 'bitgert',
  199: 'bittorrent',
  1028: 'bittorrent',
  288: 'boba',
  28: 'boba',
  188: 'bytom',
  189: 'bytom',
  820: 'callisto',
  821: 'callisto',
  42220: 'celo',
  44787: 'celo',
  62320: 'celo',
  6: 'classic',
  61: 'classic',
  62: 'classic',
  63: 'classic',
  1030: 'conflux',
  71: 'conflux',
  2023: 'cosmos',
  8000: 'cosmos',
  8001: 'cosmos',
  22023: 'cosmos',
  52: 'csc',
  53: 'csc',
  43: 'crab',
  44: 'crab',
  25: 'cronos',
  338: 'cronos',
  53935: 'dfk',
  335: 'dfk',
  20: 'elastos',
  21: 'elastos',
  22: 'elastos',
  23: 'elastos',
  64: 'ellaism',
  39797: 'energi',
  49797: 'energi',
  246: 'energyweb',
  73799: 'energyweb',
  59: 'eos',
  95: 'eos',
  1: 'ethereum',
  3: 'ethereum',
  4: 'ethereum',
  5: 'ethereum',
  42: 'ethereum',
  9000: 'evmos',
  9001: 'evmos',
  250: 'fantom',
  4002: 'fantom',
  2152: 'findora',
  2153: 'findora',
  122: 'fuse',
  123: 'fuse',
  32659: 'fusion',
  60: 'gochain',
  5869: 'gochain',
  31337: 'gochain',
  71393: 'godwoken',
  71401: 'godwoken',
  71402: 'godwoken',
  1666600002: 'harmony',
  1666600003: 'harmony',
  1666600001: 'harmony',
  1666700000: 'harmony',
  1666700001: 'harmony',
  1666700002: 'harmony',
  1666700003: 'harmony',
  128: 'heco',
  256: 'heco',
  70: 'hoo',
  170: 'hoo',
  269: 'hpb',
  4689: 'iotex',
  4690: 'iotex',
  596: 'karura',
  686: 'karura',
  2221: 'kava',
  2222: 'kava',
  321: 'kcc',
  322: 'kcc',
  1337702: 'kin',
  8217: 'klaytn',
  1001: 'klaytn',
  225: 'lachain',
  226: 'lachain',
  82: 'meter',
  83: 'meter',
  1088: 'metis',
  588: 'metis',
  2001: 'milkomeda',
  200101: 'milkomeda',
  1284: 'moonbeam',
  1286: 'moonbeam',
  1287: 'moonbeam',
  1288: 'moonbeam',
  1285: 'moonriver',
  5551: 'nahmii',
  5553: 'nahmii',
  868455272153094: 'nervos',
  26863: 'oasis',
  65: 'okexchain',
  66: 'okexchain',
  58: 'ontology',
  5851: 'ontology',
  10: 'optimism',
  69: 'optimism',
  300: 'optimism',
  420: 'optimism',
  4216137055: 'palm',
  11297108099: 'palm',
  11297108109: 'palm',
  210425: 'platon',
  2203181: 'platon',
  2206132: 'platon',
  77: 'poa',
  99: 'poa',
  333888: 'polis',
  333999: 'polis',
  137: 'polygon',
  80001: 'polygon',
  47805: 'rei',
  55555: 'reichain',
  55556: 'reichain',
  30: 'rsk',
  31: 'rsk',
  10000: 'smartbch',
  10001: 'smartbch',
  56: 'smartchain',
  97: 'smartchain',
  245022926: 'solana',
  245022934: 'solana',
  245022940: 'solana',
  19: 'songbird',
  57: 'syscoin',
  40: 'telos',
  41: 'telos',
  361: 'theta',
  363: 'theta',
  364: 'theta',
  365: 'theta',
  108: 'thundercore',
  18: 'thundercore',
  88: 'tomochain',
  89: 'tomochain',
  8: 'ubiq',
  9: 'ubiq',
  106: 'velas',
  888: 'wanchain',
  999: 'wanchain',
  100: 'xdai',
  50: 'xdc',
  51: 'xdc',
  55: 'zyx',
  534354: 'scroll',
  534351: 'scroll',
};
export const NETWORKS: { [key in string]: number } = {
  arbitrum: 42161,
  exzonetwork: 1229,
  avalanchec: 43114,
  callisto: 820,
  celo: 42220,
  classic: 61,
  ellaism: 64,
  eos: 59,
  'ether-1': 1313114,
  ethereum: 1,
  fantom: 250,
  gochain: 60,
  harmony: 1666600000,
  heco: 128,
  iotex: 4689,
  nervos: 71393,
  ontology: 58,
  optimism: 10,
  poa: 77,
  polygon: 137,
  smartbch: 10000,
  smartchain: 56,
  theta: 361,
  thundertoken: 108,
  tomochain: 88,
  wanchain: 888,
  xdai: 100,
  xdc: 50,
};
export const MANUAL_BLOCKCHAINS = [NETWORKS['optimism'], NETWORKS['arbitrum'], NETWORKS['exzonetwork'];
