/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Flink, FlinkInterface } from "../Flink";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "__Flink_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c611aca61004b60003960008181610520015281816105600152818161066701526106a70152611aca6000f3fe60806040526004361061011f5760003560e01c806370a08231116100a0578063a457c2d711610064578063a457c2d714610301578063a9059cbb14610321578063dd62ed3e14610341578063e492e1c814610387578063f2fde38b1461039c5761011f565b806370a082311461026f578063715018a61461028f57806379cc6790146102a45780638da5cb5b146102c457806395d89b41146102ec5761011f565b80633659cfe6116100e75780633659cfe6146101da57806339509351146101fc57806340c10f191461021c57806342966c681461023c5780634f1ef2861461025c5761011f565b806306fdde0314610124578063095ea7b31461014f57806318160ddd1461017f57806323b872dd1461019e578063313ce567146101be575b600080fd5b34801561013057600080fd5b506101396103bc565b604051610146919061185d565b60405180910390f35b34801561015b57600080fd5b5061016f61016a366004611800565b61044e565b6040519015158152602001610146565b34801561018b57600080fd5b506035545b604051908152602001610146565b3480156101aa57600080fd5b5061016f6101b9366004611708565b610464565b3480156101ca57600080fd5b5060405160128152602001610146565b3480156101e657600080fd5b506101fa6101f53660046116bc565b610515565b005b34801561020857600080fd5b5061016f610217366004611800565b6105de565b34801561022857600080fd5b506101fa610237366004611800565b61061a565b34801561024857600080fd5b506101fa610257366004611829565b610652565b6101fa61026a366004611743565b61065c565b34801561027b57600080fd5b5061019061028a3660046116bc565b610712565b34801561029b57600080fd5b506101fa610731565b3480156102b057600080fd5b506101fa6102bf366004611800565b610767565b3480156102d057600080fd5b506097546040516001600160a01b039091168152602001610146565b3480156102f857600080fd5b506101396107ed565b34801561030d57600080fd5b5061016f61031c366004611800565b6107fc565b34801561032d57600080fd5b5061016f61033c366004611800565b610895565b34801561034d57600080fd5b5061019061035c3660046116d6565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b34801561039357600080fd5b506101fa6108a2565b3480156103a857600080fd5b506101fa6103b73660046116bc565b61097a565b6060603680546103cb90611a06565b80601f01602080910402602001604051908101604052809291908181526020018280546103f790611a06565b80156104445780601f1061041957610100808354040283529160200191610444565b820191906000526020600020905b81548152906001019060200180831161042757829003601f168201915b5050505050905090565b600061045b338484610a12565b50600192915050565b6000610471848484610b36565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156104fb5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6105088533858403610a12565b60019150505b9392505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561055e5760405162461bcd60e51b81526004016104f290611890565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610590610d06565b6001600160a01b0316146105b65760405162461bcd60e51b81526004016104f2906118dc565b6105bf81610d34565b604080516000808252602082019092526105db91839190610d5e565b50565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909161045b9185906106159086906119ab565b610a12565b6097546001600160a01b031633146106445760405162461bcd60e51b81526004016104f290611976565b61064e8282610ea9565b5050565b6105db3382610f89565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106a55760405162461bcd60e51b81526004016104f290611890565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106d7610d06565b6001600160a01b0316146106fd5760405162461bcd60e51b81526004016104f2906118dc565b61070682610d34565b61064e82826001610d5e565b6001600160a01b0381166000908152603360205260409020545b919050565b6097546001600160a01b0316331461075b5760405162461bcd60e51b81526004016104f290611976565b61076560006110d7565b565b6000610773833361035c565b9050818110156107d15760405162461bcd60e51b8152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f77604482015263616e636560e01b60648201526084016104f2565b6107de8333848403610a12565b6107e88383610f89565b505050565b6060603780546103cb90611a06565b3360009081526034602090815260408083206001600160a01b03861684529091528120548281101561087e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104f2565b61088b3385858403610a12565b5060019392505050565b600061045b338484610b36565b600054610100900460ff16806108bb575060005460ff16155b6108d75760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff16158015610902576000805460ff1961ff0019909116610100171660011790555b61094660405180604001604052806005815260200164466c696e6b60d81b81525060405180604001604052806005815260200164464c494e4b60d81b815250611129565b61094e6111b1565b610956611224565b61095e611294565b6109666111b1565b80156105db576000805461ff001916905550565b6097546001600160a01b031633146109a45760405162461bcd60e51b81526004016104f290611976565b6001600160a01b038116610a095760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104f2565b6105db816110d7565b6001600160a01b038316610a745760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104f2565b6001600160a01b038216610ad55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104f2565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610b9a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104f2565b6001600160a01b038216610bfc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104f2565b6001600160a01b03831660009081526033602052604090205481811015610c745760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104f2565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610cab9084906119ab565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cf791815260200190565b60405180910390a35b50505050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6097546001600160a01b031633146105db5760405162461bcd60e51b81526004016104f290611976565b6000610d68610d06565b9050610d73846112fc565b600083511180610d805750815b15610d9157610d8f84846113a1565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16610ea257805460ff191660011781556040516001600160a01b0383166024820152610e1090869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b1790526113a1565b50805460ff19168155610e21610d06565b6001600160a01b0316826001600160a01b031614610e995760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016104f2565b610ea28561148c565b5050505050565b6001600160a01b038216610eff5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104f2565b8060356000828254610f1191906119ab565b90915550506001600160a01b03821660009081526033602052604081208054839290610f3e9084906119ab565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361064e565b6001600160a01b038216610fe95760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104f2565b6001600160a01b0382166000908152603360205260409020548181101561105d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104f2565b6001600160a01b038316600090815260336020526040812083830390556035805484929061108c9084906119c3565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36107e8565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680611142575060005460ff16155b61115e5760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff16158015611189576000805460ff1961ff0019909116610100171660011790555b6111916111b1565b61119b83836114cc565b80156107e8576000805461ff0019169055505050565b600054610100900460ff16806111ca575060005460ff16155b6111e65760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff16158015610966576000805460ff1961ff00199091166101001716600117905580156105db576000805461ff001916905550565b600054610100900460ff168061123d575060005460ff16155b6112595760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff16158015611284576000805460ff1961ff0019909116610100171660011790555b61128c6111b1565b61096661156a565b600054610100900460ff16806112ad575060005460ff16155b6112c95760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff161580156112f4576000805460ff1961ff0019909116610100171660011790555b61095e6111b1565b803b6113605760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104f2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6114005760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104f2565b600080846001600160a01b03168460405161141b9190611841565b600060405180830381855af49150503d8060008114611456576040519150601f19603f3d011682016040523d82523d6000602084013e61145b565b606091505b50915091506114838282604051806060016040528060278152602001611a6e602791396115d3565b95945050505050565b611495816112fc565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600054610100900460ff16806114e5575060005460ff16155b6115015760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff1615801561152c576000805460ff1961ff0019909116610100171660011790555b825161153f90603690602086019061160c565b50815161155390603790602085019061160c565b5080156107e8576000805461ff0019169055505050565b600054610100900460ff1680611583575060005460ff16155b61159f5760405162461bcd60e51b81526004016104f290611928565b600054610100900460ff161580156115ca576000805460ff1961ff0019909116610100171660011790555b610966336110d7565b606083156115e257508161050e565b8251156115f25782518084602001fd5b8160405162461bcd60e51b81526004016104f2919061185d565b82805461161890611a06565b90600052602060002090601f01602090048101928261163a5760008555611680565b82601f1061165357805160ff1916838001178555611680565b82800160010185558215611680579182015b82811115611680578251825591602001919060010190611665565b5061168c929150611690565b5090565b5b8082111561168c5760008155600101611691565b80356001600160a01b038116811461072c57600080fd5b6000602082840312156116cd578081fd5b61050e826116a5565b600080604083850312156116e8578081fd5b6116f1836116a5565b91506116ff602084016116a5565b90509250929050565b60008060006060848603121561171c578081fd5b611725846116a5565b9250611733602085016116a5565b9150604084013590509250925092565b60008060408385031215611755578182fd5b61175e836116a5565b9150602083013567ffffffffffffffff8082111561177a578283fd5b818501915085601f83011261178d578283fd5b81358181111561179f5761179f611a57565b604051601f8201601f19908116603f011681019083821181831017156117c7576117c7611a57565b816040528281528860208487010111156117df578586fd5b82602086016020830137856020848301015280955050505050509250929050565b60008060408385031215611812578182fd5b61181b836116a5565b946020939093013593505050565b60006020828403121561183a578081fd5b5035919050565b600082516118538184602087016119da565b9190910192915050565b600060208252825180602084015261187c8160408501602087016119da565b601f01601f19169190910160400192915050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156119be576119be611a41565b500190565b6000828210156119d5576119d5611a41565b500390565b60005b838110156119f55781810151838201526020016119dd565b83811115610d005750506000910152565b600281046001821680611a1a57607f821691505b60208210811415611a3b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122066728b1123389f5d8e6e295ca0293160ea4610b8e65077f1d1af6ed30c2335a964736f6c63430008020033";

export class Flink__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Flink> {
    return super.deploy(overrides || {}) as Promise<Flink>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Flink {
    return super.attach(address) as Flink;
  }
  connect(signer: Signer): Flink__factory {
    return super.connect(signer) as Flink__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlinkInterface {
    return new utils.Interface(_abi) as FlinkInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Flink {
    return new Contract(address, _abi, signerOrProvider) as Flink;
  }
}