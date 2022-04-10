export type ApiErrorResponseType = {
  message: string;
  success: false;
};

export type ApiSuccessResponseType = {
  data: T;
  success: true;
};
