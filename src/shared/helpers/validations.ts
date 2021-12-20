const hasNumber = (v: string) => {
    return /\d/.test(v);
};

export const dontHaveNumbers = (value?: string) => {
    if (!value) return true;
    if (hasNumber(value)) return false;
    return true;
};

const validNumberLength = (v: string, len: number) => {
    if (!v) return false;
    const trm = v.replace(/\s/g, "");
  
    if (trm.length !== len) {
      return false;
    }
  
    return true;
  };
