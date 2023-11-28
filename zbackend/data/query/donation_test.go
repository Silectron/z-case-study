package query

import (
	"bytes"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestReadFile(t *testing.T) {
	testCases := []struct {
		name     string
		input    string
		expected string
	}{
		{
			name:     "test read file string",
			input:    "test read file string",
			expected: "test read file string",
		},
		{
			name:     "empty file",
			input:    "",
			expected: "",
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			var buffer bytes.Buffer
			buffer.WriteString(tc.input)
			content, err := readFile(&buffer)
			assert.NoError(t, err)
			assert.Equal(t, tc.expected, string(content))
		})
	}
}

func TestReadFilePanic(t *testing.T) {
	assert.Panics(t, func() {
		readFile(nil)
	})
}
