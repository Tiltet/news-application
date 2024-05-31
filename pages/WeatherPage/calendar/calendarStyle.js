import { StyleSheet } from "react-native";

export const calendarStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
  },
  calendar: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  calendar_top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendar_top_month: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "500"
  },
  calendar_top_icons: {
    display: "flex",
    flexDirection: "row"
  },
  days: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  days_day: {
    width: '14%',
  },
  days_day_text: {
    color: "#565756",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  month_days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  month_days_day: {
    width: '14%',
  },
  month_days_day_text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
    textAlign: "center",
  }
})
