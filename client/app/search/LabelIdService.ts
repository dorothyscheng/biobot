class LabelIdService {
    cleanInput = (input: string) => input.replace(/\D/g, '');
    formatLabelId = (input: string) => {
        let formatted = '';
        Array.from(input).forEach((c, index) => {
            if (index === 2 || index === 5) {
                formatted += `-${c}`;
            } else {
                formatted += c;
            }
        });
        return formatted;
    };
}

const labelIdService = new LabelIdService();
export default labelIdService;
