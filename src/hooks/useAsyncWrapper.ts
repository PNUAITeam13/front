
function useAsyncWrapper(fn: Function) {

    const runFn = async <T>(args: T[] = [], hideMessage?: boolean) => {
        if (typeof fn !== "function") {
            throw new Error("Function is required");
        }
        let loading: boolean = false;
        let globalError: any = null;
        let data: any = null;

        loading = true;
        const res = await fn(...args)
            .then((response: any) => {
                data = response;
            })
            .catch((error: any) => {
                globalError = error

            })
            .finally(() => {
                loading = false;
                if (window.location.search.includes("debug")) {
                    console.log("====================================");
                    console.log(loading, globalError, data);
                    console.log("====================================");
                }
            });

        return { loading, error: globalError, data, status: globalError?.response?.status };
    };

    return runFn;
}
export default useAsyncWrapper