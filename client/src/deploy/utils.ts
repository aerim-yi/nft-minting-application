export function getIMXAddress(network: string) {
    switch (network) {
        case 'dev':
            return '0x3e6e01355bB66925a65D372bf9c9f3835d9964fA';
        case 'ropsten':
            return '0x4527be8f31e2ebfbef4fcaddb5a17447b27d2aef';
        case 'mainnet':
            return '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9';
    }
    throw Error('Invalid network selected')
}

export function getNetwork(chainId: string) {
    switch (chainId) {
        case '1':
            return 'mainnet';
        case '3':
            return 'ropsten';
        case '5':
            return 'dev';
    }
    throw Error('Invalid network selected')
}
