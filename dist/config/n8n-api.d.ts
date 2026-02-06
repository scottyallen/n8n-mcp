export declare function getN8nApiConfig(): {
    baseUrl: string;
    apiKey: string;
    timeout: number;
    maxRetries: number;
    cfAccessClientId: string | undefined;
    cfAccessClientSecret: string | undefined;
} | null;
export declare function isN8nApiConfigured(): boolean;
export declare function getN8nApiConfigFromContext(context: {
    n8nApiUrl?: string;
    n8nApiKey?: string;
    n8nApiTimeout?: number;
    n8nApiMaxRetries?: number;
    cfAccessClientId?: string;
    cfAccessClientSecret?: string;
}): N8nApiConfig | null;
export type N8nApiConfig = NonNullable<ReturnType<typeof getN8nApiConfig>>;
//# sourceMappingURL=n8n-api.d.ts.map