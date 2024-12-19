import cv2
import easyocr

# Load the image
image_path = "C:\\Users\\egypt\\Downloads\\train\\737.jpg"
image = cv2.imread(image_path)

# Define the bounding box (x, y, w, h)
x, y, w, h = 425, 628, 180, 86  # Example values


# Define the bounding box center (x, y) and dimensions (w, h)
center_x, center_y = 425, 628  # Example values
width, height = 180, 86        # Example dimensions

# Calculate the top-left corner of the bounding box
top_left_x = center_x - width // 2
top_left_y = center_y - height // 2

# Crop the bounding box region
cropped_image = image[top_left_y:top_left_y + height, top_left_x:top_left_x + width]

# Save the cropped image (optional, for verification)
cv2.imwrite("cropped_image.jpg", cropped_image)

# Initialize the EasyOCR reader
reader = easyocr.Reader(['en'])  # Specify language(s), e.g., 'en' for English

# Perform text recognition on the cropped image
result = reader.readtext(cropped_image)

# Display the extracted text
for detection in result:
    print(f"Detected Text: {detection[1]}")

#     {
#     "file": "C:\\Users\\egypt\\Downloads\\train\\737.jpg",
#     "x": 425,
#     "y": 628,
#     "w": 180,
#     "h": 86
# }