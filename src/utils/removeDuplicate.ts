function createFilteredPayload(body: any, initialFormState: any) {
  const payload = Object.entries(body)
    .reduce((obj, [key, value]) =>
      initialFormState[key] == value ? obj : {...obj, [key]: value}, {});

  return payload ?? {};
}
export default createFilteredPayload;