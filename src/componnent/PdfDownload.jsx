import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

const PDFDownload = ({ jobs }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {jobs
          ? jobs.map((jb, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.title}>{jb.title}</Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Jobs Type: </Text>
                  {jb.category}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Net: </Text>
                  {jb.salary}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Posted On: </Text>
                  {moment(jb.postedOn).format("YYYY-MM-DD")}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Expired On: </Text>
                  {jb.expiredIn}
                </Text>
                <Text style={styles.text}>{jb.description}</Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Posted By: </Text>
                  {jb.userEmail}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Vacancy: </Text>
                  {jb.vacancyNo}
                </Text>
              </View>
            ))
          : ""}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    width: '100%',
    height: '340px'
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: "gray",
  },
});
export default PDFDownload;
