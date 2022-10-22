/**
 *
 * @param {string} errorMessage
 */
export function showErrorToast(errorMessage) {}

export function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
