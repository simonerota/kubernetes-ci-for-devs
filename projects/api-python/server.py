#!/usr/bin/env python

from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
import SocketServer
import json
import cgi

class Server(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
    def do_HEAD(self):
        self._set_headers()
        
    def do_GET(self):
        self._set_headers()
        self.wfile.write(json.dumps({'Name': 'Python', 'Year': '1994', 'Notes': 'Questionable indentation'}))

def run(server_class=HTTPServer, handler_class=Server, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    
    print('Starting httpd on port %d...' % port)
    httpd.serve_forever()
    
if __name__ == "__main__":
    run()
        