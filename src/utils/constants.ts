import { WalletBalance } from './buzzcoinUtils';

export const rpcURL = 'http://143.215.130.235:8545';
export const bankAddress = '0x2ff7a7ef4154a24286969a381e7d2131b7154129';
export const validAddresses = [
  '0x2ff7a7ef4154a24286969a381e7d2131b7154129', // Bank
  '0x4aabf5e0b72c3a4114e3764b334e798c2b8578bf',
  '0x575fffccbce7918a78e719161f4e6aa7b77dbb97',
  '0x8b366b50df94ae3587f4b3e53b23d6f0bb045a6a',
  '0xc2220b2c2b0d5d06404349c7e09cb224976d72c4',
  '0x23bcb170a756e36d39bbe6768ef999e62b2ab87c',
  '0xbead3b6fccd188030f2172a6d712b78d3c31d951',
  '0x3d95fd8038892ddd302c809898b9cf60b3bc451b',
  '0xd5fa682326528df8033180c75ea6f9240381a5a8',
  '0x84d805b2b8adcbbb4a1e5e405d94fb582509a2f9',
  '0x09f1b0f1ca9c4270002e08c308a0b1da06bf1853',
  '0xdb2df16922290c51afe7a072f2c2214dc78f163e',
  '0x87a73c5e084cd25bde0108609773a448d1cb97a4',
  '0x17a83803ae910746bc082170f556c67371e5735a',
  '0x06a3c27d80a829adbf442ded699aafdc2dbb545d',
  '0x3945d7dff429f3990d4221b842379d9d0ec0f4c7',
  '0x41d18d2642add0dc0c84901c5914c2c77f48dd89',
  '0x1420c421342119d8475ce537d50ecd1e2bc34b5a',
  '0x974f1a3185576b8b3c18732d53f8cd51acd535cd',
  '0xf49f910772e8fe76e454eaa620b6d9a92b938851',
  '0x8797823137d756bdcfe659c882d88bce2da97d5b',
  '0x175a1063e5b501da6f3fae3ace27b309b4d6f325',
  '0x3a137696896d593c5de992d48f72e973a98bb20e',
  '0x5bc9df2986ca06cd0e416c7b125c6e482938e326',
  '0x6948349adbe7771a41acb0925a5b164e12c81b9c',
  '0x66ca461ee3adc9cb01141dec0e01a52e7470c2ae',
  '0xafa590c4ce2afe68d11a9aee4466d4485d7e26aa',
  '0x73cb38f62a5f2ce6de333aa89508e5803acc43e4',
  '0x7654db3ba912ed3bdd807344a6e9ad875c7d6532',
  '0xfbc9d5e96caf0195619cdd5b4d325cce176d6f72',
  '0x3354b77c534ee20cf6db5db1aa77c2498497efb0',
  '0x243fc0b2983c3a628dbc1c54c302d149eed2fcf6',
  '0x21393934cb8b4e58133ac3bb6f7c9ba9942b1627',
  '0xbf4025a0c450aa2090650dd1455e39541628e7d7',
  '0x1c4f437a9c0451346cf74466e6ee1cd8565a4c61',
  '0x9fa7b8b39747f8212d75dc84ee61dfcade38fff3',
  '0x6ebaa8bee7749a847dfcda658f436022c962360e',
  '0xcca8a787e917f9a665dd9fd401ab718a4f6c629e',
  '0xe1ddcc90ea163b8f5ae92507b16da786be850002',
  '0x8cd9083089c1d5257d47b6b6258806df5c2a80cf',
  '0xbf98e2944c70ab77766094d01aa8c8b7ca1d1b52',
  '0x9a9204dfea6e9b74b059e5ed1056df56d285c1e6',
  '0x9216c1a1cd46d539ac94451482c2b66663a53579',
  '0x92e4cadf6d948387e8337f2dcc3c7e9b637aee8a',
  '0x5de2c2f983ed0a0833caa43adb3743a6daa342ac',
  '0x112f96628640f94c8e99c4ae3d894c20be5c047a',
  '0x5ac74e67edc6390c74d00d4355d926f72800d95c',
  '0x0d0557079c8f2e072d1b0aa5874b977d89eb63fe',
  '0x1c4efe6b6b53369ca25556ceb5a0d3a7a5f756e4',
  '0x1ff2f28f6603ba2e46761c0020fd543939a1c787',
  '0xdc497afb3203408eecbed87e836f3587d882b522',
  '0x8a63f1e9956496d4ea85661d29ef5722ffb5d446',
  '0xec185dc2b22909caf9653164b2144439d17d0607',
  '0x8dcbb3b6f58094c7d6888a8f1b2bc4d2be70e8ba',
  '0x0f7fe5ab6be0f9808813a051a5dd292a539c67df',
  '0x482f34e0cf321abd7c3512adb9b81ff6fbdcc933',
  '0xe900ea00934c04aa551ceb410ef9869ef59953b6',
  '0x2ad42cd11fb555d03b96839f1b733b5f7e212d09',
  '0x54d8d1395f8e957a9bacc995bf601fd68e3b0ee5',
  '0x39add021a4da5b9c63378784e320f9aa859d54c7',
  '0x205717d855d2ac61038c29ecdd16479d1156c728',
  '0xdcf85f83fd36df3ea237ec343c4878efb35a74bb',
  '0x7466b8e1ace035facaae77ba4af9ee975659ae32',
  '0xfef32d4dd1bf972b245026d7598257ff0afbe11a',
  '0xb4dc744dc8a587a26df6098fac8a31cc837a6989',
  '0x66eb68ea99c3fb23ea4b7deb497d9a8dfdcc94b6',
  '0x67d962008eff9a44ffb01d548faefc57d8cbea70',
  '0x7f0a6ba79aa8e07c62241e62b02c0c19a6e551b8',
  '0xc473f25f3ff215d00a2ae2e79875513611e57502',
  '0xfd02324322c805ed95789ed455f654d86f1ac72d',
  '0x5e1dde89b7f4b76488c3fee7e621c7e36d12c6cb',
  '0x3856b5be4bfd8926ba429a1eef8a519bae9cdbf2',
  '0xea4b1d2ea83e0148fcb97fa06245582be334fa9a',
  '0x63391dfcfe9d31d85ad6efaa0276301f7426be79',
  '0xbae7a5f27090e3a3666947f34f81bb5b7b10715e',
  '0x913a5f7c58a6080294273292a82ae8939f3bb799',
  '0x591c6fff76cc9269d8808b41f08da5334a2c8082',
  '0x88fcd7dbfc37fc8c76c3f777f6743567f2df1b54',
  '0x860bbca6ab80374506ac67ea6003d395b5d408a6',
  '0xc96e0ac3532d4981e8e1babcc70e78b01abe9ab5',
  '0x444357629ba2a092e7490c49b5acc87c8d1cf1b7',
  '0x7268949b2c87041709dabc48faf2d8cb5e51d0d1',
  '0x0fa6892f2ebc6795b0ba6b6b30b8e91f58806e43',
  '0xfda94b3f920a90cfbf26333d40395127ba2ad4ee',
  '0x407c8f0aa1d5b488084af69be46909c2b6786504',
  '0x03202737f97802a5acdddf2ca406eac9ac3165f8',
  '0x57b71a64f6a1d1bf86f463ef82d1e200e344a915',
  '0xfae964e7a1f4d81c95756635c45936462aea7820',
  '0x2e67f427d0d3cf1de19d204f3e57835bfe8aa057',
  '0x0d71d63c989dc7fb36586681d25a4457df3b1ff8',
  '0xe07c5309b5c08b71617e171ef1356b25f83a4d33',
  '0xf839e13f4f3bcee2281b814c9921421a7d16a05d',
];
export const dummyBalances: WalletBalance[] = [
  {
    address: '0x4aabf5e0b72c3a4114e3764b334e798c2b8578bf',
    balance: 149.994853874,
  },
  {
    address: '0xafa590c4ce2afe68d11a9aee4466d4485d7e26aa',
    balance: 100.99962111,
  },
  {
    address: '0x88fcd7dbfc37fc8c76c3f777f6743567f2df1b54',
    balance: 100.999475666,
  },
  {
    address: '0x92e4cadf6d948387e8337f2dcc3c7e9b637aee8a',
    balance: 100.999402414,
  },
  {
    address: '0x73cb38f62a5f2ce6de333aa89508e5803acc43e4',
    balance: 100.285391546,
  },
  {
    address: '0x7654db3ba912ed3bdd807344a6e9ad875c7d6532',
    balance: 70.999241146,
  },
  {
    address: '0x913a5f7c58a6080294273292a82ae8939f3bb799',
    balance: 70.998365193,
  },
  {
    address: '0x2ad42cd11fb555d03b96839f1b733b5f7e212d09',
    balance: 70.997646681,
  },
  {
    address: '0xdc497afb3203408eecbed87e836f3587d882b522',
    balance: 69.996432126,
  },
  {
    address: '0x7f0a6ba79aa8e07c62241e62b02c0c19a6e551b8',
    balance: 60.999355732,
  },
  {
    address: '0x243fc0b2983c3a628dbc1c54c302d149eed2fcf6',
    balance: 60.999015858,
  },
  {
    address: '0x5bc9df2986ca06cd0e416c7b125c6e482938e326',
    balance: 50.999362975,
  },
  {
    address: '0x67d962008eff9a44ffb01d548faefc57d8cbea70',
    balance: 50.998506562,
  },
  {
    address: '0xfd02324322c805ed95789ed455f654d86f1ac72d',
    balance: 50.998286429,
  },
  {
    address: '0x23bcb170a756e36d39bbe6768ef999e62b2ab87c',
    balance: 40.999923721,
  },
  {
    address: '0xbf4025a0c450aa2090650dd1455e39541628e7d7',
    balance: 40.99953392,
  },
  {
    address: '0xfbc9d5e96caf0195619cdd5b4d325cce176d6f72',
    balance: 31,
  },
  {
    address: '0x575fffccbce7918a78e719161f4e6aa7b77dbb97',
    balance: 1,
  },
  {
    address: '0x8b366b50df94ae3587f4b3e53b23d6f0bb045a6a',
    balance: 1,
  },
  {
    address: '0xc2220b2c2b0d5d06404349c7e09cb224976d72c4',
    balance: 1,
  },
  {
    address: '0xbead3b6fccd188030f2172a6d712b78d3c31d951',
    balance: 1,
  },
  {
    address: '0x175a1063e5b501da6f3fae3ace27b309b4d6f325',
    balance: 1,
  },
  {
    address: '0x3a137696896d593c5de992d48f72e973a98bb20e',
    balance: 1,
  },
  {
    address: '0x6948349adbe7771a41acb0925a5b164e12c81b9c',
    balance: 1,
  },
  {
    address: '0x66ca461ee3adc9cb01141dec0e01a52e7470c2ae',
    balance: 1,
  },
  {
    address: '0x3354b77c534ee20cf6db5db1aa77c2498497efb0',
    balance: 1,
  },
  {
    address: '0x21393934cb8b4e58133ac3bb6f7c9ba9942b1627',
    balance: 1,
  },
  {
    address: '0x1c4f437a9c0451346cf74466e6ee1cd8565a4c61',
    balance: 1,
  },
  {
    address: '0x9fa7b8b39747f8212d75dc84ee61dfcade38fff3',
    balance: 1,
  },
  {
    address: '0x6ebaa8bee7749a847dfcda658f436022c962360e',
    balance: 1,
  },
  {
    address: '0xcca8a787e917f9a665dd9fd401ab718a4f6c629e',
    balance: 1,
  },
  {
    address: '0xe1ddcc90ea163b8f5ae92507b16da786be850002',
    balance: 1,
  },
  {
    address: '0x8cd9083089c1d5257d47b6b6258806df5c2a80cf',
    balance: 1,
  },
  {
    address: '0xbf98e2944c70ab77766094d01aa8c8b7ca1d1b52',
    balance: 1,
  },
  {
    address: '0x9a9204dfea6e9b74b059e5ed1056df56d285c1e6',
    balance: 1,
  },
  {
    address: '0x9216c1a1cd46d539ac94451482c2b66663a53579',
    balance: 1,
  },
  {
    address: '0x5de2c2f983ed0a0833caa43adb3743a6daa342ac',
    balance: 1,
  },
  {
    address: '0x112f96628640f94c8e99c4ae3d894c20be5c047a',
    balance: 1,
  },
  {
    address: '0x5ac74e67edc6390c74d00d4355d926f72800d95c',
    balance: 1,
  },
  {
    address: '0x0d0557079c8f2e072d1b0aa5874b977d89eb63fe',
    balance: 1,
  },
  {
    address: '0x1c4efe6b6b53369ca25556ceb5a0d3a7a5f756e4',
    balance: 1,
  },
  {
    address: '0x1ff2f28f6603ba2e46761c0020fd543939a1c787',
    balance: 1,
  },
  {
    address: '0x8a63f1e9956496d4ea85661d29ef5722ffb5d446',
    balance: 1,
  },
  {
    address: '0xec185dc2b22909caf9653164b2144439d17d0607',
    balance: 1,
  },
  {
    address: '0x8dcbb3b6f58094c7d6888a8f1b2bc4d2be70e8ba',
    balance: 1,
  },
  {
    address: '0x0f7fe5ab6be0f9808813a051a5dd292a539c67df',
    balance: 1,
  },
  {
    address: '0x482f34e0cf321abd7c3512adb9b81ff6fbdcc933',
    balance: 1,
  },
  {
    address: '0xe900ea00934c04aa551ceb410ef9869ef59953b6',
    balance: 1,
  },
  {
    address: '0x54d8d1395f8e957a9bacc995bf601fd68e3b0ee5',
    balance: 1,
  },
  {
    address: '0x39add021a4da5b9c63378784e320f9aa859d54c7',
    balance: 1,
  },
  {
    address: '0x205717d855d2ac61038c29ecdd16479d1156c728',
    balance: 1,
  },
  {
    address: '0xdcf85f83fd36df3ea237ec343c4878efb35a74bb',
    balance: 1,
  },
  {
    address: '0x7466b8e1ace035facaae77ba4af9ee975659ae32',
    balance: 1,
  },
  {
    address: '0xfef32d4dd1bf972b245026d7598257ff0afbe11a',
    balance: 1,
  },
  {
    address: '0xb4dc744dc8a587a26df6098fac8a31cc837a6989',
    balance: 1,
  },
  {
    address: '0x66eb68ea99c3fb23ea4b7deb497d9a8dfdcc94b6',
    balance: 1,
  },
  {
    address: '0xc473f25f3ff215d00a2ae2e79875513611e57502',
    balance: 1,
  },
  {
    address: '0x5e1dde89b7f4b76488c3fee7e621c7e36d12c6cb',
    balance: 1,
  },
  {
    address: '0x3856b5be4bfd8926ba429a1eef8a519bae9cdbf2',
    balance: 1,
  },
  {
    address: '0xea4b1d2ea83e0148fcb97fa06245582be334fa9a',
    balance: 1,
  },
  {
    address: '0x63391dfcfe9d31d85ad6efaa0276301f7426be79',
    balance: 1,
  },
  {
    address: '0xbae7a5f27090e3a3666947f34f81bb5b7b10715e',
    balance: 1,
  },
  {
    address: '0x591c6fff76cc9269d8808b41f08da5334a2c8082',
    balance: 1,
  },
  {
    address: '0x860bbca6ab80374506ac67ea6003d395b5d408a6',
    balance: 1,
  },
  {
    address: '0xc96e0ac3532d4981e8e1babcc70e78b01abe9ab5',
    balance: 1,
  },
  {
    address: '0x444357629ba2a092e7490c49b5acc87c8d1cf1b7',
    balance: 1,
  },
  {
    address: '0x7268949b2c87041709dabc48faf2d8cb5e51d0d1',
    balance: 1,
  },
  {
    address: '0x0fa6892f2ebc6795b0ba6b6b30b8e91f58806e43',
    balance: 1,
  },
  {
    address: '0xfda94b3f920a90cfbf26333d40395127ba2ad4ee',
    balance: 1,
  },
  {
    address: '0x407c8f0aa1d5b488084af69be46909c2b6786504',
    balance: 1,
  },
  {
    address: '0x03202737f97802a5acdddf2ca406eac9ac3165f8',
    balance: 1,
  },
  {
    address: '0x57b71a64f6a1d1bf86f463ef82d1e200e344a915',
    balance: 1,
  },
  {
    address: '0xfae964e7a1f4d81c95756635c45936462aea7820',
    balance: 1,
  },
  {
    address: '0x2e67f427d0d3cf1de19d204f3e57835bfe8aa057',
    balance: 1,
  },
  {
    address: '0x0d71d63c989dc7fb36586681d25a4457df3b1ff8',
    balance: 1,
  },
  {
    address: '0xe07c5309b5c08b71617e171ef1356b25f83a4d33',
    balance: 1,
  },
  {
    address: '0xf839e13f4f3bcee2281b814c9921421a7d16a05d',
    balance: 1,
  },
  {
    address: '0x3d95fd8038892ddd302c809898b9cf60b3bc451b',
    balance: 0,
  },
  {
    address: '0xd5fa682326528df8033180c75ea6f9240381a5a8',
    balance: 0,
  },
  {
    address: '0x84d805b2b8adcbbb4a1e5e405d94fb582509a2f9',
    balance: 0,
  },
  {
    address: '0x09f1b0f1ca9c4270002e08c308a0b1da06bf1853',
    balance: 0,
  },
  {
    address: '0xdb2df16922290c51afe7a072f2c2214dc78f163e',
    balance: 0,
  },
  {
    address: '0x87a73c5e084cd25bde0108609773a448d1cb97a4',
    balance: 0,
  },
  {
    address: '0x17a83803ae910746bc082170f556c67371e5735a',
    balance: 0,
  },
  {
    address: '0x06a3c27d80a829adbf442ded699aafdc2dbb545d',
    balance: 0,
  },
  {
    address: '0x3945d7dff429f3990d4221b842379d9d0ec0f4c7',
    balance: 0,
  },
  {
    address: '0x41d18d2642add0dc0c84901c5914c2c77f48dd89',
    balance: 0,
  },
  {
    address: '0x1420c421342119d8475ce537d50ecd1e2bc34b5a',
    balance: 0,
  },
  {
    address: '0x974f1a3185576b8b3c18732d53f8cd51acd535cd',
    balance: 0,
  },
  {
    address: '0xf49f910772e8fe76e454eaa620b6d9a92b938851',
    balance: 0,
  },
  {
    address: '0x8797823137d756bdcfe659c882d88bce2da97d5b',
    balance: 0,
  },
];
// export const contractAddress = '0xfCCF80344a668b72ac4Be23513F0E9E4a35C84fA';
// export const contractABI = abi.abi;
