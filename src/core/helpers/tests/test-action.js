export const testAction = (name, funcAction, type, checkPayload) => {
    describe(name, () => {
        const payload = 1;

        it('should has type', () => {
            const action = funcAction();

            expect(action.type).toBe(type);
        });

        if (checkPayload) {
            it('should has payload', () => {
                const action = funcAction(payload);

                expect(action.payload).toBe(payload);
            });
        }
    });
};
