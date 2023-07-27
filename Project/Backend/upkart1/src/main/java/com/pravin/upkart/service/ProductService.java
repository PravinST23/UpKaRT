package com.pravin.upkart.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pravin.upkart.entity.Product;
import com.pravin.upkart.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public String addProduct(Product product, MultipartFile file) throws IOException {
        byte[] imageData = file.getBytes();
        product.setImage(imageData);
        productRepository.save(product);
        return "Product added successfully";
    }
    
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }
}
