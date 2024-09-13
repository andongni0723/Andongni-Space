// Base64 編碼
export function encodeBase64(input: string | Uint8Array): string {
    if (typeof input === 'string') {
        // 將字符串轉換為 Uint8Array
        input = new TextEncoder().encode(input);
    }

    // 將 Uint8Array 轉換為 Base64 編碼的字符串
    return btoa(String.fromCharCode(...new Uint8Array(input)));
}

// Base64 解碼
export function decodeBase64(encoded: string): string {
    // 將 Base64 編碼的字符串轉換為原始字節數組
    const decoded = atob(encoded);
    const bytes = new Uint8Array(decoded.length);

    for (let i = 0; i < decoded.length; i++) {
        bytes[i] = decoded.charCodeAt(i);
    }

    // 將字節數組轉換為字符串
    return new TextDecoder().decode(bytes);
}
