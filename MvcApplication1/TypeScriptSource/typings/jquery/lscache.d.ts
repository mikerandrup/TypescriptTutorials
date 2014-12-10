interface lscacheInterface {
    set(key: string, value: any, expirationMinutes?: number);

    get(key: string): any;

    flush();

    flushExpired();

    setBucket(bucketName: string);
}

declare var lscache: lscacheInterface;