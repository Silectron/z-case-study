package query

import (
	"encoding/json"
	"io"
	"log"
	"os"
	"zbackend/data/models"
)

func readDonationFile() *os.File {
	file, err := os.Open("data/100-last-donations.json")
	if err != nil {
		log.Fatal(err)
	}
	return file
}

func readFile(reader io.Reader) ([]byte, error) {
	bytes, err := io.ReadAll(reader)
	return bytes, err
}

func GetDonations() ([]models.TransactionWithDonationObject, error) {
	file := readDonationFile()
	defer file.Close()

	bytes, err := readFile(file)
	if err != nil {
		return nil, err
	}

	var donations []models.TransactionWithDonationObject
	err = json.Unmarshal(bytes, &donations)
	if err != nil {
		return nil, err
	}

	return donations, nil
}
