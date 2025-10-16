import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardHeader: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "gray",
  },
  cardContent: {
    padding: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  separator: {
    textAlign: "center",
    marginVertical: 10,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    borderColor: "#ccc",
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 12,
    color: "#007bff",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  signUpText: {
    textAlign: "center",
    fontSize: 14,
  },
  link: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 20,
    color: "gray",
  },
});

export default styles;