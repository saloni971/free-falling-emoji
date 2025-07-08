import cv2
import numpy as np

def cartoonize_image(image_path, output_path):
    # Read the image
    img = cv2.imread(image_path)
    
    # Convert the image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Apply median blur to reduce noise
    gray_blurred = cv2.medianBlur(gray, 5)
    
    # Detect edges using adaptive thresholding
    edges = cv2.adaptiveThreshold(
        gray_blurred, 255, 
        cv2.ADAPTIVE_THRESH_MEAN_C, 
        cv2.THRESH_BINARY, 9, 9
    )
    
    # Apply bilateral filter to remove noise while keeping edges sharp
    color = cv2.bilateralFilter(img, 9, 300, 300)
    
    # Combine edges and color images
    cartoon = cv2.bitwise_and(color, color, mask=edges)
    
    # Save the output image
    cv2.imwrite(output_path, cartoon)
    print(f"Cartoon image saved at {output_path}")

# Replace 'input.jpg' with your input image file path and 'output.jpg' for the output
cartoonize_image('input.jpg', 'output.jpg')
