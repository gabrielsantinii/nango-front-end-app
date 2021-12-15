export interface UseStep {
    step: number;
    nextStep: () => void;
    prevStep: () => void;
}
