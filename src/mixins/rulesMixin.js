export default {
  data: () => ({
    email: '',
    password: '',
    confirmPassword: ''
  }),
  computed: {
    emailRules () {
      return [
        !!this.email || 'E-mail is required',
        /.+@.+/.test(this.email) || 'E-mail must be valid'
      ]
    },
    passwordRules () {
      return [
        !!this.password || 'Password is required',
        this.password.length >= 6 || 'Password must be equal or more than 6 characters'
      ]
    },
    confirmPasswordRules () {
      return [
        !!this.confirmPassword || 'Password is required',
        this.password !== this.confirmPassword ? 'Passwords should match' : true
      ]
    }
  }
}
